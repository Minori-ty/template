FROM openjdk:20

RUN apt-get install -y curl gnupg unzip
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y sdkmanager
RUN apt-get install -y nodejs
RUN apt-get install -y git
# RUN apt-get install -y openjdk-20-jdk
# RUN apt-get install -y openjdk-20-jre

RUN curl -L -o sdk-tools.zip "https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip" && \
unzip sdk-tools.zip -d /usr/local/android-sdk && \
rm sdk-tools.zip

ENV ANDROID_HOME /usr/local/android-sdk
ENV PATH $PATH:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools

RUN yes | sdkmanager --licenses && \
sdkmanager "platform-tools" "platforms;android-28"
RUN curl -L -o ndk.zip "http://dl.google.com/android/repository/android-ndk-r21e-linux-x86_64.zip" && \
unzip ndk.zip -d /usr/local/android-ndk && \
rm ndk.zip

ENV ANDROID_NDK_HOME /usr/local/android-ndk/android-ndk-r21e
ENV PATH $PATH:$ANDROID_NDK_HOME
