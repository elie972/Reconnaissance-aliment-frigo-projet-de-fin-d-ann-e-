FROM python:3.7-slim
WORKDIR /app
COPY . /app
RUN pip3 install pip --upgrade
RUN pip3 install opencv-python
RUN apt-get update
RUN apt-get install libopencv-highgui-dev -y
RUN apt-get install ffmpeg libsm6 libxext6 -y
RUN pip3 install -r requirements.txt 
EXPOSE 80
CMD ["python", "app_web-2.py"]