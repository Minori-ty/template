import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:router/pages/screen/index.dart';
import 'package:router/router/index.dart';
import 'package:router/store/index.dart';

void main() {
  runApp(MultiProvider(
    providers: [
      ChangeNotifierProvider(create: (_) => Index()),
      ChangeNotifierProvider(create: (_) => LoginStore()),
    ],
    child: const MyApp(),
  ));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routerConfig: router,
      debugShowCheckedModeBanner: false,
    );
  }
}
