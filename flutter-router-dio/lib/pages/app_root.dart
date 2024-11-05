import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:router/pages/Message/index.dart';
import 'package:router/pages/home.dart';
import 'package:router/pages/me.dart';
import 'package:router/store/index.dart';

class AppRoot extends StatelessWidget {
  const AppRoot({super.key});

  final List<BottomNavigationBarItem> _list = const [
    BottomNavigationBarItem(icon: Icon(Icons.home), label: "首页"),
    BottomNavigationBarItem(icon: Icon(Icons.menu_open), label: "分类"),
    BottomNavigationBarItem(icon: Icon(Icons.message), label: "消息"),
  ];
  final List<Widget> _page = const [Home(), Me(), Message()];

  @override
  Widget build(BuildContext context) {
    final index = Provider.of<Index>(context);
    return Scaffold(
      body: SafeArea(child: _page[index.currentIndex]),
      // appBar: AppBar(
      //   title: const Text("app"),
      //   centerTitle: true,
      // ),
      bottomNavigationBar: BottomNavigationBar(
        items: _list,
        currentIndex: index.currentIndex,
        onTap: (value) {
          index.setCurrentIndex(value);
        },
      ),
    );
  }
}
