import 'package:flutter/material.dart';

class Message extends StatelessWidget {
  const Message({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SingleChildScrollView(
            child: Column(
      children: [
        ...List.generate(100, (index) {
          return Container(
              width: double.infinity,
              color: Colors.blue,
              child: Text('Text $index'));
        })
      ],
    )));
  }
}
