from django.http import JsonResponse

from .services import get_projects_list

def get_projects(request):
    return JsonResponse(get_projects_list())