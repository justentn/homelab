from django.core.management.base import BaseCommand
import asyncio
from amqtt.broker import Broker

config = {
    'listeners': {
        'default': {
            'type': 'tcp',
            'bind': '0.0.0.0:1883'
        }
    },
    'sys_interval': 10,
    'auth': {
        'allow-anonymous': True
    }
}

class Command(BaseCommand):
    help = 'Start MQTT broker'

    def handle(self, *args, **kwargs):
        asyncio.run(self._start())

    async def _start(self):
        broker = Broker(config)
        await broker.start()
        self.stdout.write('MQTT broker started on port 1883')
        await asyncio.get_event_loop().create_future()  # run forever
