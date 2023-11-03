from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Event
from .serializers import EventSerializer

# Create your views here.
@api_view(['GET'])
def events_list(request):
    """
    List all events in db.
    """
    try:
        # events = Event.objects.all()
        events =  Event.objects.future_events()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(
            {"error": "An error occurred while fetching event data."},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )