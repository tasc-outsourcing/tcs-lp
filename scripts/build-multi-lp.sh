#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist"
PRO_DIR="$ROOT_DIR/PRO Landing Page"
VAT_DIR="$ROOT_DIR/TCS VAT Filing UAE"
SAUDI_DIR="$ROOT_DIR/Saudi Business Setup"
KSA_WORKFORCE_DIR="$ROOT_DIR/KSA Workforce Governance Advisory"
PAYROLL_OUT_DIR="$ROOT_DIR/Payroll Outsourcing"
GRO_DIR="$ROOT_DIR/GRO Services"
PAYROLL_MGMT_DIR="$ROOT_DIR/Payroll Management Services"
THANK_YOU_DIR="$ROOT_DIR/Thank You RFP"

echo "Cleaning combined dist..."
rm -rf "$DIST_DIR"
mkdir -p "$DIST_DIR"

echo "Building uae-pro LP..."
pushd "$PRO_DIR" >/dev/null
npm install --no-audit --no-fund
npm run build -- --base /uae-pro/
popd >/dev/null

echo "Building uae-vat-filing LP..."
pushd "$VAT_DIR" >/dev/null
npm install --no-audit --no-fund
npm run build -- --base /uae-vat-filing/
popd >/dev/null

echo "Building saudi-business-setup LP..."
pushd "$SAUDI_DIR" >/dev/null
npm install --no-audit --no-fund
npm run build -- --base /saudi-business-setup/
popd >/dev/null

echo "Building ksa-workforce-advisory LP..."
pushd "$KSA_WORKFORCE_DIR" >/dev/null
npm install --no-audit --no-fund
npm run build -- --base /ksa-workforce-advisory/
popd >/dev/null

echo "Copying outputs into combined dist..."
mkdir -p "$DIST_DIR/assets" "$DIST_DIR/uae-pro" "$DIST_DIR/uae-vat-filing" "$DIST_DIR/saudi-business-setup" "$DIST_DIR/ksa-workforce-advisory"
cp "$ROOT_DIR/index.html" "$DIST_DIR/index.html"
cp "$KSA_WORKFORCE_DIR/tcs 1.png" "$DIST_DIR/assets/tcs-logo.png"
cp -R "$PRO_DIR/dist/." "$DIST_DIR/uae-pro/"
cp -R "$VAT_DIR/dist/." "$DIST_DIR/uae-vat-filing/"
cp -R "$SAUDI_DIR/dist/." "$DIST_DIR/saudi-business-setup/"
cp -R "$KSA_WORKFORCE_DIR/dist/." "$DIST_DIR/ksa-workforce-advisory/"

echo "Copying static LPs (payroll-outsourcing, gro-services, payroll-management-services)..."
mkdir -p "$DIST_DIR/payroll-outsourcing" "$DIST_DIR/gro-services" "$DIST_DIR/payroll-management-services"
cp -R "$PAYROLL_OUT_DIR/." "$DIST_DIR/payroll-outsourcing/"
cp -R "$GRO_DIR/." "$DIST_DIR/gro-services/"
cp -R "$PAYROLL_MGMT_DIR/." "$DIST_DIR/payroll-management-services/"

echo "Copying thank-you pages (en, ar)..."
mkdir -p "$DIST_DIR/en/thank-you-request-for-proposal" "$DIST_DIR/ar/thank-you-request-for-proposal"
cp -R "$THANK_YOU_DIR/en/." "$DIST_DIR/en/thank-you-request-for-proposal/"
cp -R "$THANK_YOU_DIR/ar/." "$DIST_DIR/ar/thank-you-request-for-proposal/"

echo "Multi-LP build complete."
