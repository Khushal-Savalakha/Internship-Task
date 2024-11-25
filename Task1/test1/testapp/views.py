from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .models import lift_passenger
from .serializers import lift_passengerSerializer
from django.views.decorators.csrf import csrf_exempt



@api_view(['POST'])
def passenger_data(request):
    serializer=lift_passengerSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


from django.http import JsonResponse
from django.middleware.csrf import get_token
def get_csrf_token(request):
    return JsonResponse({'csrfToken': get_token(request)})
