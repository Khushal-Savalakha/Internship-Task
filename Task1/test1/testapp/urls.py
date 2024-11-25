from django.contrib import admin
from django.urls import path,include
# from testapp import 
from testapp import views
urlpatterns = [
    path('get_csrf/',views.get_csrf_token),
    path('add_passenger_data/',views.passenger_data),
    path('last_floor/',views.last_floor)
]
