from django.shortcuts import render, redirect  
# from django.http import HttpResponse
from .models import Csd
from django.contrib.auth.forms import UserCreationForm as UserCreateForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login as auth_login, authenticate,logout


def contact(request):
    c = Csd.objects.all()
    return render(request, 'contact.html', {'csd_list': c})

def details(request, slug):
    csd = Csd.objects.get(slug=slug)
    return render(request, 'details.html', {'csd': csd})

def register(request):
    if request.method == 'POST':
        form = UserCreateForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("contact")
    else:
        form = UserCreateForm()

    
    return render(request, 'register.html', {'form': form})


def login(request):
     if request.method == 'POST':
          form = AuthenticationForm(data=request.POST)
          if form.is_valid():
               username = form.cleaned_data.get('username')
               password = form.cleaned_data.get('password')
               user = authenticate(username=username, password=password)
               if user is not None:
                    auth_login(request, user)
                    return redirect("contact")
     else:
          form = AuthenticationForm()
     
     return render(request, 'login.html', {'form': form})


def logout_view(request):
    logout(request)
    return redirect("contact")
