import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const mt5Account = searchParams.get("account");
  const brokerServer = searchParams.get("server");

  if (!mt5Account || !brokerServer) {
    return NextResponse.json({
      valid: false,
      status: "missing_params",
      message: "Missing account or server",
    });
  }

  const { data, error } = await supabase
    .from("licenses")
    .select("*")
    .eq("mt5_account", mt5Account)
    .eq("broker_server", brokerServer)
    .single();

  if (error || !data) {
    return NextResponse.json({
      valid: false,
      status: "not_found",
      message: "License not found",
    });
  }

  const licenseStatus = String(data.status).trim().toLowerCase();

  if (licenseStatus !== "active") {
    return NextResponse.json({
      valid: false,
      status: licenseStatus,
      message: "License is not active",
    });
  }

  if (data.expires_at && new Date(data.expires_at) < new Date()) {
    return NextResponse.json({
      valid: false,
      status: "expired",
      message: "License expired",
    });
  }

  return NextResponse.json({
    valid: true,
    status: "active",
    message: "License valid",
  });
}