param(
    [Parameter(Mandatory=$true)]
    [string]$file
)

# Ensure file exists
if (-not (Test-Path -Path $file -PathType Leaf)) {
    Write-Error "File not found: $file"
    exit 1
}

# Get absolute path and extension
$fullPath = Resolve-Path $file
$ext = [IO.Path]::GetExtension($fullPath)

# If input is .ts compile that file; if input is .js, skip tsc
if ($ext -ieq ".ts") {
    Write-Host "Compiling $fullPath..."
    $tsc = npx tsc $fullPath
    if ($LASTEXITCODE -ne 0) {
        Write-Error "TypeScript compilation failed."
        exit $LASTEXITCODE
    }
    # determine output JS path (tsc by default places .js next to .ts)
    $outJs = [IO.Path]::ChangeExtension($fullPath, ".js")
} elseif ($ext -ieq ".js") {
    $outJs = $fullPath
} else {
    Write-Error "Unsupported file extension: $ext. Provide a .ts or .js file."
    exit 1
}

# Run node on the output JS
Write-Host "Running node $outJs..."
node $outJs
exit $LASTEXITCODE

