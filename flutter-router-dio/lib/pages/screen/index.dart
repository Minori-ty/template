import 'package:animated_splash_screen/animated_splash_screen.dart';
import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';
import 'package:router/pages/app_root.dart';

class Screen extends StatelessWidget {
  const Screen({super.key});

  @override
  Widget build(BuildContext context) {
    return AnimatedSplashScreen(
      splash: SingleChildScrollView(
        child: Center(
          child: LottieBuilder.asset(
            "lib/assets/Lottie/loadding.json",
            width: 200,
          ),
        ),
      ),
      nextScreen: const AppRoot(),
      backgroundColor: Colors.black,
      duration: 3000,
    );
  }
}
