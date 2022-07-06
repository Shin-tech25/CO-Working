---
title: メンテナンスしやすいAnsiblePlaybookの書き方
date: "2022-07-06T11:29"
description: "メンテナンスしやすいAnsiblePlaybookの書き方"
---

# メンテナンスしやすい Ansible Playbook の書き方

## 概要

### トップダウン設計

### 冪等性

### 変数の設計

## Playbook

### Playbook の総本山 site.yml

### 役割単位で Playbook を設計する

### role に実際の処理を書く

### role はタグ付けし、局所的運用を可能にする

## Inventory の設計

### YAML 形式での Inventory 構成

### host_vars, group_vars

## role の書き方

### 車輪の再発明を防ぐ!Ansible-Galaxy

## 参考
