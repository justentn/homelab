# homelab

## What is this?

This repo contains an assortment of applications used to monitor and interact with IoT devices around the house.

To aid in automation and monitoring of tasks around the home, I will be utilizing a mixture of Pico Pis, Raspberry Pis and ESP32 boards.

## Tech Stack

- Django Backend
- React (Typescript) frontend
- Micropython for embedded

## Dependencies

`python 3.11+`

`nodejs 25.8.2+`

## TODO

- Automatic Garden Care
  - [ ] Sensor Integrations
    - [x] Capacitive Soil Moisture Sensor
    - [ ] Water Pump
  - [ ] MQTT Integration 
  - [ ] REST API to grab IoT sensor data on demand
  - [ ] Setup LLM to analyze growth 
- Energy monitoring via Kasa plugs
- Pico PI Support
- A frontend with some nice dashboards
  - [ ] Energy allocation dashboard
