from django.urls import path, include
from .views import *
urlpatterns = [
    path('', RoomView.as_view(), name='room')
]
