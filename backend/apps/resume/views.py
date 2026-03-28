from django.http import JsonResponse
from . import get_resume_data

def get_resume(request):
    data = get_resume_data()
    return JsonResponse(data)