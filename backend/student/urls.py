from django.urls import path
from . import views

app_name = 'student'  # Namespace for this app's URLs

urlpatterns = [
    path('students_list/', views.student_list, name='student_list'),
    path('login/', views.login_view, name='login_view'),
    # path('students/<int:student_id>/', views.student_detail, name='student_detail'),
    
]
