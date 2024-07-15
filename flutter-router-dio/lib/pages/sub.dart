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
      appBar: AppBar(),
      body: Center(
        child: _list.isNotEmpty
            ? ListView.builder(
                itemBuilder: (context, index) {
                  return Text(
                    _list[index].name,
                    textAlign: TextAlign.center,
                  );
                },
                itemCount: _list.length)
            : const Text("失败了"),
      ),
    );
  }

  Future<void> _getList() async {
    try {
      final UserList data = await getUserList();
      setState(() {
        _list = data.list.toList();
      });
    } catch (e) {
      // throw Exception("获取用户列表失败");
    }
  }
}
