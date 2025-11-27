# PowerShell script to move static export to docs folder

# Remove the old docs folder if it exists
if (Test-Path ../docs) { Remove-Item ../docs -Recurse -Force }
# Recreate the docs folder
New-Item -ItemType Directory -Path ../docs | Out-Null
# Copy all contents from out to docs
Copy-Item -Path ./out/* -Destination ../docs -Recurse
