from django.contrib import admin
from testapp.models import lift_passenger

# Register your models here.
class lift_passenger_Admin(admin.ModelAdmin):
    list_display=['no_of_passenger','initial','destination','time_slot']

admin.site.register(lift_passenger,lift_passenger_Admin)