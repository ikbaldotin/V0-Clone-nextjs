#!/bin/bash
set -euo pipefail

# Start Next.js dev server, wait for / to return 200, then shut it down.
ping_server() {
	counter=0
	response=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000")
	while [[ ${response} -ne 200 ]]; do
		counter=$((counter + 1))
		if (( counter % 20 == 0 )); then
			echo "Waiting for server to start..."
			sleep 0.1
		fi
		response=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000")
	done
}

cd /home/user
npx next dev --turbopack > /tmp/next-dev.log 2>&1 &
server_pid=$!
trap 'kill "$server_pid" >/dev/null 2>&1 || true' EXIT

ping_server

# Stop the dev server once the page compiled.
kill "$server_pid" >/dev/null 2>&1 || true
wait "$server_pid" || true