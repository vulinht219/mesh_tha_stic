#!/bin/bash
sleep 10

echo "Seeding InfluxDB 1.8..."

influx -host influxdb -execute "CREATE DATABASE paxcounter"

influx -host influxdb -execute "$(cat /seed/seed.iql)"

echo "Influx seeded"
