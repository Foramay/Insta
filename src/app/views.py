from django.shortcuts import render



def home(request):
    template_name = 'home_medio.html'
    return render(request, template_name, {})


def mensajes(request):
    template_name = 'mensajes.html'
    return render(request, template_name, {})