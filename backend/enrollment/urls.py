from django.urls import path
from . import views

app_name = 'enrollment'

urlpatterns = [
    path('enrollment_list/', views.enrollment, name='enrollment'),
    
]
