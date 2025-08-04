from django.urls import path
from . import views

urlpatterns = [
    path('', views.comic_list, name='comic_list'),
    path('comics/', views.comic_list, name='comic_list_alt'),
    path('comics/<int:chapter_id>/', views.comic_detail, name='comic_detail'),
]