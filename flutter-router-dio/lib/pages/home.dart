import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:router/store/index.dart';
import 'package:provider/provider.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    final loginStore = Provider.of<LoginStore>(context);
    return Center(
      child: Column(
        children: [
          ElevatedButton(
            child: const Text("登录"),
            onPressed: () {
              loginStore.setIsLogin(true);
            },
          ),
          ElevatedButton(
            child: const Text("清除登录"),
            onPressed: () {
              loginStore.setIsLogin(false);
            },
          ),
          ElevatedButton(
            child: const Text("点击跳转到Sub"),
            onPressed: () {
              context.go("/sub");
            },
          ),
          ElevatedButton(
            child: const Text("点击跳转到Detail"),
            onPressed: () {
              context.go("/detail");
            },
          ),
        ],
      ),
    );
  }
}
