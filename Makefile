COM_PORT := /dev/ttyUSB0
IOT_DIR := ./services/iot/esp32

frontend:
	cd ./frontend && npm run dev &

backend:
	pip install -r ./backend/requirements.txt
	cd ./backend && /usr/bin/env python3 manage.py runserver &

mqtt:
	pip install -r ./backend/requirements.txt
	cd ./backend && /usr/bin/env python3 manage.py mqtt_broker &

.PHONY: stack frontend backend

stack: frontend backend mqtt

.PHONY: flash

flash: flash_esp32

flash_esp32:
	cd ./services/iot && esptool -p $(COM_PORT) flash-id

.PHONY: deploy

clean_device:
	mpremote connect $(COM_PORT) exec "import os; [os.remove(f) for f in os.listdir() if f.endswith('.py')]"
	mpremote connect $(COM_PORT) exec "import os; [os.remove('lib/'+f) for f in os.listdir('lib') if f.endswith('.py')] if 'lib' in os.listdir() else None"
	mpremote connect $(COM_PORT) exec "import os; [os.remove('lib/gpio/'+f) for f in os.listdir('lib/gpio') if f.endswith('.py')] if 'gpio' in os.listdir('lib') else None"
	mpremote connect $(COM_PORT) exec "import os; [os.remove('lib/netio/'+f) for f in os.listdir('lib/netio') if f.endswith('.py')] if 'netio' in os.listdir('lib') else None"
	mpremote connect $(COM_PORT) exec "import os; os.remove('config.json') if 'config.json' in os.listdir() else None"

deploy: clean_device
	mpremote connect $(COM_PORT) exec "import os; os.mkdir('lib') if 'lib' not in os.listdir() else None"
	mpremote connect $(COM_PORT) exec "import os; os.mkdir('lib/gpio') if 'gpio' not in os.listdir('lib') else None"
	mpremote connect $(COM_PORT) exec "import os; os.mkdir('lib/netio') if 'netio' not in os.listdir('lib') else None"
	mpremote connect $(COM_PORT) cp $(wildcard $(IOT_DIR)/*.py) :
	mpremote connect $(COM_PORT) cp $(wildcard $(IOT_DIR)/lib/gpio/*.py) :lib/gpio
	mpremote connect $(COM_PORT) cp $(wildcard $(IOT_DIR)/lib/netio/*.py) :lib/netio
	mpremote connect $(COM_PORT) cp $(IOT_DIR)/../config.json :config.json
	mpremote connect $(COM_PORT) reset + repl
