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
        builder: (context, state) => const Detail(),
      ),
      GoRoute(path: "login", builder: (context, state) => const Login())
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
