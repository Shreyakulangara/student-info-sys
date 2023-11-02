from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Grade
from .serializers import GradeSerializer  # Create this serializer

@api_view(['GET'])
def grade_list(request):
    """
    List all students in db.
    """
    try:
        grade = Grade.objects.all()
        serializer = GradeSerializer(grade, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(
            {"error": "An error occurred while fetching grade data."},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
