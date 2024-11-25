from django.db import models

# Create your models here.
class lift_passenger(models.Model):
    no_of_passenger=models.IntegerField()
    initial=models.IntegerField()
    destination=models.IntegerField()
    time_slot=models.DateTimeField()