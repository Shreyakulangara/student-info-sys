from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Enrollment
from .serializers import EnrollmentSerializer

# Create your views here.
@api_view(['GET'])
def enrollment(request):
    """
    List all enrollment details.
    """
    try:
        enrollment = Enrollment.objects.all()
        serializer = EnrollmentSerializer(enrollment, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(
            {"error": "An error occurred while fetching enrollment data."},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )