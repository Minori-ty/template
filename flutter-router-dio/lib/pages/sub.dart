import 'package:flutter/material.dart';
import 'package:router/api/index.dart';
import 'package:router/models/home/detail.dart';

class Sub extends StatefulWidget {
  const Sub({super.key});

  @override
  State<Sub> createState() => _SubState();
}

class _SubState extends State<Sub> {
  List<User> _list = [];

  @override
  void initState() {
    super.initState();
    _getList();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView.builder(
          itemBuilder: (context, index) {
            return Text(
              _list[index].name,
              textAlign: TextAlign.center,
            );
          },
          itemCount: _list.length),
    );
  }

  Future<void> _getList() async {
    final UserList data = await getUserList();
    setState(() {
      _list = data.list.toList();
    });
  }
}
