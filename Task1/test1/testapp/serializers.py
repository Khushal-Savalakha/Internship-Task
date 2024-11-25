from rest_framework import serializers
from .models import lift_passenger

class lift_passengerSerializer(serializers.ModelSerializer):
    class Meta:
        model=lift_passenger
        fields=['no_of_passenger','initial','destination','time_slot']