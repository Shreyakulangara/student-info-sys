from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Course
from .serializers import CourseSerializer

# Create your views here.
@api_view(['GET'])
def course_list(request):
    """
    List all courses in db.
    """
    try:
        course = Course.objects.all()
        serializer = CourseSerializer(course, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(
            {"error": "An error occurred while fetching course data."},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )