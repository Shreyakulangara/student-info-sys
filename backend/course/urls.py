from django.urls import path
from . import views

app_name = 'course'  # Namespace for this app's URLs

urlpatterns = [
    path('course_list/', views.course_list, name='course_list'),
    
]
