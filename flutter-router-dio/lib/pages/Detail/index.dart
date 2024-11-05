import 'package:flutter/material.dart';

class Detail extends StatelessWidget {
  const Detail({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Stack(children: [
      SingleChildScrollView(
          child: SafeArea(
        child: Column(
          children: List.generate(100, (index) {
            return Container(
                width: double.infinity,
                color: Colors.blue,
                child: Text('Text $index'));
          }),
        ),
      )),
      SafeArea(
          child: Container(
        margin: const EdgeInsets.only(left: 25),
        decoration:
            const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
        child: IconButton(
          icon: const Icon(Icons.arrow_back_ios_rounded),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
      ))
    ]));
  }
}
