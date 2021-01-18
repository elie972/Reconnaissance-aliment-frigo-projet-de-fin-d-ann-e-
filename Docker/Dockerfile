FROM python:3-slim
WORKDIR /app
COPY . /app
RUN pip install opencv-python
RUN apt-get update ##[edited]
RUN apt-get install ffmpeg libsm6 libxext6  -y
RUN pip install -r requirements.txt
EXPOSE 80
CMD ["python", "app_web.py"]