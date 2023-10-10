from django.shortcuts import render



def home(request):
    template_name = 'home_medio.html'
    return render(request, template_name, {})


def mensajes(request):
    template_name = 'mensajes.html'
    return render(request, template_name, {})


def perfil(request):
    template_name = 'perfil.html'
    return render(request, template_name, {})


def login(request):
    template_name = 'login.html'
    return render(request, template_name, {})


def registro(request):
    template_name = 'registro.html'
    return render(request, template_name, {})