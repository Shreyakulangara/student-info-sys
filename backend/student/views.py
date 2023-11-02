from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view
from .models import Student
from .serializers import StudentSerializer  # Create this serializer
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@api_view(['GET'])
def student_list(request):
    """
    List all students in db.
    """
    try:
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(
            {"error": "An error occurred while fetching student data."},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
        
@api_view(['POST'])       
# @csrf_exempt      
def login_view(request):
    try:
        if request.method == 'POST':
            username = request.data.get('username')
            password = request.data.get('password') 

            # Authenticate the user
            user = authenticate(request, username=username, password=password)

            if user is not None:
                # Log in the user
                login(request, user)
                # Generate a JWT token
                refresh = RefreshToken.for_user(user)
                access_token = str(refresh.access_token)
                refresh_token = str(refresh)

                response_data = {
                    'access_token': access_token,
                    'refresh_token': refresh_token,
                    'success': True,
                }
                return Response(response_data, status=status.HTTP_200_OK)
            else:
                response_data = {
                'error': 'Invalid credentials. Please check your username and password.',
                'success': False,
                }
                return Response(response_data, status=status.HTTP_401_UNAUTHORIZED)
        else:
            response_data = {
                'error': 'Invalid request method.',
                'success': False,
            }
            return Response(response_data, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    except Exception as e:
        return Response(
            {"error": "An error occurred while loging.", 'success': False},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
