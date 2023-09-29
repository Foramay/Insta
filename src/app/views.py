from django.shortcuts import render



def home(request):
    template_name = 'home_medio.html'
    return render(request, template_name, {})