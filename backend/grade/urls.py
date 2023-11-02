from django.urls import path
from . import views

app_name = 'grade'  # Namespace for this app's URLs

urlpatterns = [
    path('grade_list/', views.grade_list, name='grade_list'),    
]
