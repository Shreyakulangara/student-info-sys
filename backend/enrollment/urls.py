from django.urls import path
from . import views

app_name = 'enrollment'  # Namespace for this app's URLs

urlpatterns = [
    path('enrollment_list/', views.enrollment, name='enrollment'),
    
]
