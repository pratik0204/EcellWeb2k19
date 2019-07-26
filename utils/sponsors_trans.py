from sponsors.models import Sponsor
from django.http import JsonResponse
import requests
import shutil
        
SPONS_TYPE = {
    'AS':'ATS',
    'PLTS':'PTS',
    'GS':'GDS',
    'TS':'TLS',
    'PRTS':'PRS'
}


def data_transfer(request):
    URL = "https://3b1bdaef.ngrok.io/sponsors/list/"
    r = requests.get(URL)
    data = r.json()
    image_url = 'https://3b1bdaef.ngrok.io/static/uploads/sponsors/'
    # print(data)
    sponsors = data['spons']
    for sponsor_data in sponsors:
        # print(sponsor)
        # print()
        sponsor_s = sponsor_data['sponsors']
        for sponsor in sponsor_s:
            # image_name = sponsor['profile_pic'].replace(image_url,'')
            print(sponsor)
            if sponsor['flag'] is True:
                name = sponsor['name']
                details = sponsor['details']
                year = sponsor['year']
                website = sponsor['website']
                contact = sponsor['contact']
                spons_type = SPONS_TYPE[sponsor['spons_type']]
                year = 2018
                social_media = '-'
                
                image_name = name+'.jpeg'
                image_location = 'static/uploads/sponsors/'+image_name
                
                req = requests.get(sponsor['pic'].replace('http://127.0.0.1:8080','https://3b1bdaef.ngrok.io'), stream=True)
                with open(image_location, 'wb') as out_file:
                    shutil.copyfileobj(req.raw, out_file)
                del req
                pic = image_location
                new_sponsor = Sponsor()
                new_sponsor.name = name
                new_sponsor.details = details
                new_sponsor.spons_type = spons_type
                new_sponsor.year = year
                new_sponsor.website = website
                new_sponsor.contact = contact
                new_sponsor.year = year
                new_sponsor.pic = pic
                new_sponsor.save()
    return JsonResponse({'success':True})