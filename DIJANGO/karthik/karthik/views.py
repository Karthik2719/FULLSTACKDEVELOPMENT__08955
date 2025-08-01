from django.shortcuts import render

def home(request):
    # Renders the home.html template
    return render(request, "home.html")

def about(request):
    # Renders the about.html template
    return render(request, "about.html")
 