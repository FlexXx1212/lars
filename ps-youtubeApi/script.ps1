$apiKey = "XXX"
$result = Invoke-WebRequest "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCoyziYRqIEVosdR4laZjTGg&key=$apiKey"
$json = $result.Content | ConvertFrom-Json
$json.items[0].statistics.subscriberCount | Out-File "$PSScriptRoot/count.txt" -NoNewline
