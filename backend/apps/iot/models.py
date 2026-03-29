from django.db import models


class SensorReading(models.Model):
    pin = models.IntegerField()
    raw = models.IntegerField()
    voltage = models.FloatField()
    moisture = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Pin {self.pin} - {self.moisture}% at {self.timestamp}'
