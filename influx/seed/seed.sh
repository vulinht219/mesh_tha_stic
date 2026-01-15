#!/bin/bash

echo "Waiting for InfluxDB..."
sleep 8

echo "Seeding InfluxDB..."

influx -host influxdb -execute "$(cat /seed/seed.iql)"

echo "Seed done."
