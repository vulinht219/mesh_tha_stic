#!/bin/bash

echo "Waiting for InfluxDB..."
sleep 8

echo "Seeding InfluxDB..."

influx -execute "$(cat /seed/seed.iql)"

echo "Seed done."
