import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:router/pages/detail.dart';
import 'package:router/pages/home.dart';
import 'package:router/pages/app_root.dart';
import 'package:router/pages/sub.dart';
import 'package:router/store/index.dart';
import 'package:provider/provider.dart';
import 'package:router/pages/login.dart';

GoRouter router = GoRouter(
  initialLocation: "/",
  routes: [
    GoRoute(path: "/", builder: (context, state) => const AppRoot(), routes: [
      GoRoute(path: "home", builder: (context, state) => const Home()),
      GoRoute(
        path: "sub",
        builder: (context, state) => const Sub(),
      ),
      GoRoute(
          path: "detail",
          // builder: (context, state) => const Detail(),
          pageBuilder: (context, state) =>
              downAndPull(context, state, const Detail())),
      GoRoute(
          path: "login",
          pageBuilder: (context, state) =>
              downAndPull(context, state, const Login()))
    ]),
  ],
  redirect: (context, state) {
    final protectedPaths = ["/detail"];
    final loginStore = context.read<LoginStore>();
    if (protectedPaths.contains(state.fullPath) && !loginStore.isLogin) {
      return '/login';
    }
    return null;
  },
);

/// 页面升起
Page<dynamic> downAndPull(
    BuildContext context, GoRouterState state, Widget page) {
  return CustomTransitionPage(
    child: page,
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      const begin = Offset(0.0, 1.0);
      const end = Offset.zero;
      const curve = Curves.ease;

      var tween = Tween(begin: begin, end: end).chain(CurveTween(curve: curve));
      var offsetAnimation = animation.drive(tween);

      return SlideTransition(
        position: offsetAnimation,
        child: child,
      );
    },
  );
}
