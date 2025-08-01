from django.contrib import admin
from django.urls import path
from mrcet.views import  contact, details  
from .views import register 

from .views import login, logout_view


urlpatterns = [
    path('admin/', admin.site.urls), 
    path('contact/', contact, name="contact"),  
    path('details/<slug:slug>/', details, name="details"),
    path('register/', register, name="register"),  
    path('login/', login, name="login"),
    path('logout/', logout_view, name="logout"),
]